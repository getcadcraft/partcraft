---
title: Paleisti iš USB įrenginio
summary: Ką inžineriniai įrankiai įrašo ir kur, kad CadCraft Studio galėtų veikti iš USB atminties lazdelės ar bet kurio aplanko be diegimo programos ir be administratoriaus teisių: parametrai, generatoriai, talpyklos ir detalių failai bei tai, kas lieka lazdelėje.
keywords: usb, nešiojamas, be diegimo programos, administratorius, admin, parametrai, duomenų aplankas, generatoriai, kur įrašomi failai, neprisijungus, privatumas, prieiga prie kompiuterio
from: 263efc79
---

Inžineriniams įrankiams (generatoriams, inžinerinei bibliotekai, patikroms ir duomenų failams) **nereikia administratoriaus teisių** ir **diegimo programos**. Jie įrašo tik čia nurodytus duomenis ir nieko daugiau.

| Kas | Kur laikoma |
|---|---|
| Jūsų detalės su jų sugeneruotais korpusais, duomenų lapais ir patikromis | Detalės failas (`.partcraft.json`), ten, kur jį įrašote. |
| Generatoriai, kuriuos atvėrėte iš failų | Programos savoje saugykloje: naršyklės vietinėje saugykloje tinklalapyje ir aplanke `data`, esančiame šalia programos nešiojamoje Studio versijoje. Daugiausia 20. |
| Parametrai (jūsų nustatyti vokselių dydžiai, sprendiklio gijos, išdėstymas) | Ta pati programos saugykla. |
| Duomenų lapai, laukai, tinkleliai | Tik ten, kur juos įrašote: atsisiuntimas eina ten, kur pasirinksite. |

Įrankiai **neatlieka jokių savų tinklo ryšių**: pridedami generatoriai yra failai programos aplanke, biblioteka ir patikros vykdomos jūsų kompiuteryje darbiniame procese (worker), kuris negali pasiekti tinklo, o inžineriniai duomenys (vandens ir oro savybės, medžiagos) yra pačioje programoje. Generatorius, kurį atvėrėte iš failo, skaitomas jūsų kompiuteryje ir niekur neišsiunčiamas.

## Nešiojama Windows zip versija ir Linux

Nešiojama Studio versija Windows sistemai saugo savo parametrus, talpyklas ir priedus aplanke `data`, esančiame šalia programos. Linux AppImage saugo juos šalia savęs, kai šalia yra failas pavadinimu `portable`; be to failo naudojamas jūsų pagrindinis aplankas. Nešiojamos Mac versijos nėra: sistema neleidžia programai, atsisiųstai iš interneto, rašyti šalia savęs. Savieji nešiojamos versijos žinynai (`Studio` žinynas) išvardija, ką programa įrašo.

## Prieiga prie kompiuterio

Čia niekas neprašo prieigos prie kompiuterio. Spausdintuvai, nuoseklieji įrenginiai ir USB įrenginiai yra atskiri: jie paprašo leidimo, kai darbui jų reikia, kartą kiekvienam įrenginiui, o joks generatorius ar patikra jų neliečia.
