---
title: Detalių sąrašas, išskleistos peržiūros ir judančios detalės
summary: Suteikite surinkimo detalėms numerį, aprašymą ir medžiagą, skaitykite ir atsisiųskite medžiagų specifikaciją, kurkite išskleistas peržiūras žingsniais arba automatiškai, rankiniu būdu perkelkite nesujungtas detales, nustatykite jungčių ribas ir eksportuokite visą surinkimą kaip STL, 3MF arba medžiagų specifikaciją.
keywords: bom, medžiagų specifikacija, detalių sąrašas, detalės numeris, medžiaga, tankis, csv, išskleista peržiūra, išskleisti, sutraukti, trajektorijos linijos, perkelti detalę, tempti, manipuliatorius, transliuoti, sukti, jungčių ribos, surinkimo eksportas, surinkimo žingsnis, surinkimo brėžinys, pozicijų žymos
from: ebc9f6f3
---

Šios priemonės yra surinkimo dešiniajame skydelyje (žr. [Surinkimo kūrimas](topic:build-assembly)).

## Detalės savybės

Kairiajame sąraše pasirinkite detalę. Skiltyje **Detalės savybės** nustatykite:

- **Detalės numeris** (iki 40 simbolių) ir **Aprašymas** (iki 200).
- **Medžiaga**: įprasta medžiaga su jos tankiu arba **Savas tankis…**, kad įvestumėte tankį g/cm³. Tada skydelyje rodoma detalės masė.

Savybės priklauso detalei, todėl visos jos kopijos jas bendrai naudoja. Jos įrašomos surinkimo byloje.

## Medžiagų specifikacija

Kai nieko nepasirinkta ({{key:Esc}}), skydelyje rodoma **Medžiagų specifikacija**: po vieną eilutę kiekvienai detalei su pozicijos numeriu, kiekiu (kiek kopijų), detalės numeriu, pavadinimu, medžiaga ir mase. Pozicijų numeriai seka tvarką, kuria detalės pirmą kartą pasirodo sąraše. Masės apskaičiuojamos pagal kiekvienos detalės tūrį (pagal briaunotąjį kietąjį kūną, kurį sukuria tinklelio branduolys; apskritose detalėse šiek tiek mažiau) ir jos medžiagą. Detalė be medžiagos neturi masės, ir tada nėra bendros sumos.

{{ui:Atsisiųsti CSV}} įrašo sąrašą kaip CSV failą (taip pat **Eksportuoti › Medžiagų specifikacija (CSV)**). Jį galima atverti bet kurioje skaičiuoklėje; tekstas, prasidedantis ženklais = arba +, gauna pradžioje apostrofą, kad skaičiuoklė jo nevykdytų kaip formulės.

## Išskleistos peržiūros

Išskleista peržiūra detales išskleidžia atskirai, kad būtų galima daryti paveikslėlius. Ji niekada nekeičia jungčių ar tikrųjų detalių vietos: įrašymas, susikirtimų tikrinimas ir eksportas naudoja tikrąsias padėtis.

1. Kai nieko nepasirinkta, po **Išskleistos peržiūros** pasirinkite {{ui:Naujas vaizdas}}.
2. Skiltyje **Pridėti žingsnį** pažymėkite detales, kurias žingsnis perkelia, pasirinkite **Kryptį** (+X … −Z, spustelėto paviršiaus normalė arba **Vilkti rodyklę peržiūroje**) ir **Atstumą**, tada {{ui:Pridėti žingsnį}}. Su **Vilkimu** vilkite rodyklę ir paleiskite: žingsnis perima jūsų nuvilktą kryptį ir atstumą.
3. Pridėkite daugiau žingsnių. Jie rodomi vienas po kito.
4. Vilkite slankiklį tarp **Surinkta** ir **Išskleista**, kad animuotumėte peržiūrą. Brūkšninės trajektorijos linijos eina nuo kiekvienos detalės pradinės padėties iki dabartinės vietos.

{{ui:Automatinis (radialinis)}} perkelia visas detales, išskyrus įtvirtintąją, nuo surinkimo vidurio. {{ui:Automatinis (pagal jungtis)}} perkelia kiekvieną sujungtą detalę (kartu su visomis jai žemiau sujungtomis) išilgai jos jungties paviršiaus normalės. Galite išsaugoti kelis pavadintus vaizdus; pasirinkite vieną skiltyje **Vaizdas**, arba **Surinkta**, kad detalės grįžtų į vietas. Vaizdai įrašomi surinkimo byloje.

## Detalės perkėlimas ranka

Ranka perkeliama tik detalė, kuri nėra sujungta su įtvirtinta detale (įtvirtinta detalė yra fiksuota; jungtys išdėsto likusias). Pasirinkite ją ir skiltyje **Perkelti ranka**:

- Įveskite **ΔX, ΔY, ΔZ** ir pasirinkite {{ui:Perkelti}}, arba pasirinkite ašį, **Kampą** ir {{ui:Sukti}} (apie detalės vidurį).
- {{ui:Tempti, kad perkeltumėte}} rodo rodykles ant detalės: tempkite rodyklę, kad judėtumėte pagal tą ašį, arba kvadratą, kad judėtumėte plokštumoje. {{ui:Tempti, kad pasuktumėte}} rodo žiedus jai pasukti. Kiekvienas tempimas yra vienas anuliavimo žingsnis. {{key:Esc}} paslepia rodykles.

## Jungčių ribos

Pasirinkite judančią jungtį ir skiltyje **Ribos** pažymėkite **Laikyti … tarp ribų** bet kuriai jos reikšmei, tada nustatykite jos **Mažiausią** ir **Didžiausią** reikšmę. Kiekviena reikšmė laikoma savo ribose, jos slankiklis apima tik tą intervalą, o **Patikrinti judesį dėl susikirtimų** tikrina tik tarp jų. Cilindrinė jungtis gali riboti savo kampą, poslinkį arba abu. Pakeitus jungties tipą, ribos panaikinamos reikšmėms, kurių naujasis tipas neturi.

## Viso surinkimo eksportas

Surinkime meniu **Eksportuoti** įrašo visą surinkimą su kiekviena detale ten, kur ji padėta:

- **STEP AP242 / AP214** ir **Brėžinys (PDF)** šioje versijoje dar nesukurti: jiems reikalingas tikslusis branduolys, todėl jie pilkai nuspalvinti. Vietoj to eksportuokite kiekvienos detalės STEP (tikslųjį kietąjį kūną) iš pačios detalės.
- **STL**: vienas tinklelis visoms detalėms. **3MF**: kiekviena detalė po vieną kartą, o kiekviena jos kopija įdedama atskirai.
- **Medžiagų specifikacija (CSV)**.

## Ribos

- Surinkimo brėžinys ir surinkimo STEP šioje versijoje dar nesukurti (jiems reikalingas tikslusis branduolys). Išskleistos peržiūros skirtos paveikslėliams ekrane.
