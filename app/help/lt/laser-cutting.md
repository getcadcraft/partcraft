---
title: Siųsti brėžinį į lazerį
summary: Pasirinkite, ką daro kiekvienas sluoksnis (pjauti, įbrėžti, graviruoti, užpildyti, paveikslėlis), peržiūrėkite galvutės judesius, įrašykite GRBL lazerio režimo G-code arba siųskite jį iš naršyklės, apibrėžę darbą rėmeliu.
keywords: lazeris, lazerinis pjaustytuvas, lazerinis graviruotuvas, GRBL, G-code, graviravimas, užpildymas, taškavimas, paveikslėlio graviravimas, įbrėžimas, pjovimas, Web Serial, Linux, apibrėžti darbą rėmeliu, galia, greitis, perėjimai
from: 327b3c46
---

Skydelis {{ui:Lazeris}} paverčia brėžinio sluoksnius programa lazeriui, kuris veikia su GRBL (dauguma mėgėjiškų ir mažų dirbtuvių diodinių ir CO2 valdiklių). PartCraft programoje pasirinkite {{ui:Eksportuoti}} › {{ui:Lazerio programa…}}, tada {{ui:Pridėti kontūrus iš DXF…}}: kontūrai ir skylės įkeliami sluoksnyje CUT. Lakštinio metalo detalių plokščios išklotinės (su lenkimo linijomis sluoksnyje BEND) reikalauja tikslaus branduolio, kurio šioje versijoje nėra. Nustatymai įrašomi detalės ar surinkimo faile.

:::warning
Visus nustatymus pirmiausia išbandykite ant atliekų, dėvėkite lazeriui tinkamus apsauginius akinius, kur yra dangtis, laikykite jį uždarytą ir niekada nepalikite veikiančio lazerio be priežiūros. Sluoksnio pradinės reikšmės yra vietos rezervai, o ne rekomendacijos bet kokiai medžiagai.
:::

## Pasirinkite, ką daro kiekvienas sluoksnis

Kiekvienas brėžinio sluoksnis yra eilutė. {{ui:Atlieka}} nustato **Pjauti**, **Įbrėžti**, **Graviruoti linijas**, **Užpildyti formas**, **Graviruoti paveikslėlį** arba **Nesiųsti**, su {{ui:Galia %}}, {{ui:Greitis mm/min}} ir {{ui:Perėjimai}} skaičiumi.

- **Užpildymas** išdegina uždarų formų vidų linijomis, {{ui:Linijų tarpas}} atstumu, {{ui:Kampas}} kampu, abiem kryptimis arba viena; su išėjimu už ribų (overscan), kad galvutė būtų pilname greityje, kai įsijungia lazeris. Kryžminė brūkšniuotė prideda antrą perėjimą 90°. Forma su skyle lieka atvira skylės vietoje.
- **Paveikslėlio graviravimas** paveikslėlį paverčia taškais (Floyd–Steinberg, Atkinson, tvarkingas arba paprastas juodai baltas su slenksčiu) arba, su *Pilkųjų tonų lygiai*, kintama galia.
- Tvarka: pirma paveikslėliai ir užpildymai, tada linijų graviravimas, tada įbrėžimai, tada pjovimai, kad išpjauta detalė nejudėtų, kol ji graviruojama. Viename sluoksnyje keliai eina **iš vidaus į išorę** (skylė prieš plokštę, kurioje ji yra), artimiausias kitas.

## Peržiūra, tada įrašymas

Peržiūra parodo, ką daro galvutė: degančios linijos rodomos spalva, greiti judesiai – pilka spalva, o aplink viską, kas dega, – žalias stačiakampis. Žemiau rodomas dydis, degimo ilgis ir laiko įvertis (be pagreičio; tikra mašina užtrunka ilgiau). {{ui:Įrašyti G kodą…}} įrašo GRBL lazerio režimo G-code: `$32=1`, `M4` (arba `M3`) su S reikšmėmis, `G0` ir `G1` judesius, `M5` pabaigoje. X0 Y0 yra darbo apatinis kairysis kampas, nebent pasirinksite brėžinio pradžios tašką: tada nustatykite savo mašinos darbinį nulį ten. G-code atitinka GRBL dokumentuotą lazerio režimą; jis dar neišbandytas ant tikro lazerio.

## Siųsti iš naršyklės

Chrome ir Edge naršyklėse {{ui:Prijungti…}} paprašo pasirinkti lazerio USB prievadą. Nieko nesijungia ir nesiunčia, kol nepaspausite mygtuko. Pirmiausia paspauskite {{ui:Apibrėžti darbą rėmeliu}}: galvutė nubrėžia darbo dėžutę su išjungtu lazeriu (arba žemos galios režimu, kurį nustatėte rodyklei), kad matytumėte, kur bus degama. Tik tada įsijungia {{ui:Siųsti darbą}}, o pakeitus ką nors – vėl išsijungia. {{ui:Pristabdyti}} sulaiko galvutę, {{ui:Sustabdyti}} ją sulaiko, atstato valdiklį (lazeris išsijungia) ir siunčia `M5`. Ten, kur nėra Web Serial (Firefox, Safari ir CadCraft Studio, kurio žiniatinklio rodinyje jo dar nėra), įrašykite G-code ir siųskite jį savo lazerio programa.

## Dar neįgyvendinta

Kitų valdiklių formatai (Ruida, Marlin lazeriai, gamintojų failai), skirtukai ir įvedimai, kerfo poslinkis, medžiagų bibliotekos, sukamosios ir Z ašys, kameros lygiavimas.
