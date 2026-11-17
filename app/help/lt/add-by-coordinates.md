---
title: Eskizo geometrijos pridėjimas įvedant koordinates
summary: Naudokite Pridėti pagal koordinates eskizo skydelyje, kad linijas, ašines linijas, stačiakampius, apskritimus ir taškus padėtumėte tiksliose vietose – tik klaviatūra.
keywords: koordinatės, įvedama įvestis, įvestis klaviatūra, skaitinė įvestis, tiksli padėtis, x y, absoliučios koordinatės, prieinamumas, be pelės
from: 5e6c1656
---

Kai žinote skaičius, juos surinkti greičiau nei spustelėti ir matuoti. **Pridėti pagal koordinates** yra dešiniajame skydelyje visada, kai atidarytas eskizas. Ši funkcija taip pat leidžia kurti eskizą visai be rodyklės.

Koordinatės pateikiamos milimetrais, pagal paties eskizo ašis: x – į dešinę, y – į viršų, žiūrint į eskizą, o (0, 0) yra pradžios taškas (raudonas apskritimas su kryžiumi).

## Figūros pridėjimas

1. Atidarykite eskizą (žr. [Pirmojo eskizo braižymas](topic:sketch-basics)).
2. Dešiniajame skydelyje slinkite iki **Pridėti pagal koordinates**.
3. Pasirinkite figūrą lauke **Pridėti**: Linija, Ašinė linija, Stačiakampis, Apskritimas arba Taškas.
4. Užpildykite laukelius:

| Figūra | Laukeliai |
|---|---|
| Linija | **Nuo x, y** ir **Iki x, y** |
| Ašinė linija | **Nuo x, y** ir **Iki x, y** |
| Stačiakampis | **Kampas x, y** ir **Priešingas kampas x, y** |
| Apskritimas | **Centras x, y** ir **Spindulys** |
| Taškas | **Taške x, y** |

5. Pasirinkite {{ui:Pridėti}}, arba bet kuriame laukelyje paspauskite {{key:Enter}}.

Figūra atsiranda, o būsenos juostoje rodoma, pavyzdžiui, „Pridėtas stačiakampis.“ Laukeliai ištuštėja ir paruošiami kitai figūrai. Kiekvienas pridėjimas – vienas anuliavimo žingsnis.

Porą įveskite kaip du skaičius, atskirtus kableliu arba tarpu: `0, 0`, `25 -10` arba `12.5,40`. Neigiami skaičiai ir dešimtainiai skaičiai tinka. Spindulys turi būti didesnis už nulį. Jei kas nors neatpažįstama kaip skaičius, būsenos juostoje rodoma: „Įveskite koordinates kaip „x, y“ ir spindulį, didesnį už nulį.“

## Pavyzdys: įvestas plokštės kontūras su tarpu

1. Atidarykite eskizą ant **Priekinė plokštuma**.
2. **Pridėti**: Stačiakampis. **Kampas x, y**: `-50, -30`. **Priešingas kampas x, y**: `50, 30`. {{key:Enter}}.
3. **Pridėti**: Apskritimas. **Centras x, y**: `-30, 0`. **Spindulys**: `5`. {{key:Enter}}.
4. **Centras x, y**: `30, 0`. **Spindulys**: `5`. {{key:Enter}}.
5. Pasirinkite {{ui:Išeiti iš eskizo}}, tada {{ui:Ištempti}}: 100 × 60 plokštė su dviem 10 mm skylėmis.

## Įvesta geometrija išdėstoma, bet nesusieta

Įvestos koordinatės geometriją padeda tinkamoje vietoje, bet tai **nėra ryšiai**. Figūros lieka mėlynos (nepilnai apibrėžtos) ir gali pajudėti, jei jas tempsite arba pakeisite kitą matmenį:

- įvestas stačiakampis turi savo kampo, horizontalaus ir vertikalaus ryšius, kaip ir nubraižytas, bet nieko nesieja su pradžios tašku;
- įvesta linija neturi horizontalaus ar vertikalaus ryšio, net jei įvedėte lygią liniją;
- įvesto apskritimo centras yra laisvas.

Kad eskizas būtų visiškai apibrėžtas, vėliau pridėkite matmenis ir ryšius (žr. [Visiškai apibrėžkite eskizą](topic:relations-dimensions)). Pavyzdžiui, pasirinkite stačiakampio kampą ir pradžios tašką bei pasirinkite {{ui:• Sutampa}}, arba užkotuokite apskritimų centrus nuo pradžios taško.

:::note
Be rodyklės galite nuveikti iki šio taško: perkelkite žymeklį į plokštumos eilutę istorijoje klavišais {{key:Tab}} ir rodyklių klavišais, paspauskite {{key:Enter}}, kad ją pasirinktumėte, paspauskite {{key:S}}, kad pradėtumėte eskizą, čia pridėkite figūras ir pasiekite **{{ui:Redaguoti}}** prie kiekvieno matmens, o {{ui:Išeiti iš eskizo}} – su {{key:Tab}}. Šioje versijoje geometrijos pasirinkimui, taigi ir ryšių ar naujų matmenų pridėjimui, vis dar reikia spustelėti arba palietimo.
:::

## Ribos

- Lankų kol kas negalima įvesti. Braižykite juos įrankiu Lankas arba įveskite apskritimą ir naudokite ryšius.
- Šiame laukelyje nėra santykinių koordinačių (nuo paskutinio taško) ar polinių koordinačių (ilgis ir kampas).
- Įvesta geometrija nepritraukiama prie esamų taškų. Jei taškai turi likti sujungti, įveskite tas pačias koordinates kaip esamas taškas, tada tarp jų pridėkite ryšį {{ui:• Sutampa}}.
